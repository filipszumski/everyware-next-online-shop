import Image from "next/image";
import { getServerSession } from "next-auth";
import React from "react";

import { authOptions } from "@/app/api/auth/[...nextauth]/utils/authOptions";
import { apolloClient } from "@/graphql/apolloClient";
import { GetAccountOrdersDocument } from "@/graphql/generated/graphql";

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user.email) {
    throw new Error("No authenticated user found");
  }

  const orders = await apolloClient.query({
    query: GetAccountOrdersDocument,
    variables: { email: session?.user.email },
  });

  return (
    <div>
      <h2 className="text-lg mb-8">
        Orders history{" "}
        <span className="text-textSecondary">
          ({orders.data?.account?.orders.length ?? 0})
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {orders.data?.account?.orders.map((order) => {
          return (
            <div
              key={order.id}
              className="grid grid-cols-1 gap-4 bg-backgroundLight max-w-lg p-6 rounded-lg"
            >
              <h3 className="text-lg font-bold ">
                Order Number - <span className="">{order.id}</span>
              </h3>
              <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center">
                {order.orderItems.map((orderitem) => (
                  <React.Fragment key={orderitem.product?.id}>
                    <Image
                      src={orderitem.product?.images[0].url ?? ""}
                      alt={orderitem.product?.name ?? "Product image"}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <div>{orderitem.product?.name}</div>
                    <div>
                      <span className="text-textSecondary">Qty. </span>
                      {orderitem.quantity}
                    </div>
                    <div>
                      <span className="text-textSecondary">Total: </span>
                      {orderitem.total}
                    </div>
                  </React.Fragment>
                ))}
                <div className="col-span-4 border-t border-borderDefault" />
                <div className="col-start-4">
                  <span className="text-textSecondary">Total: </span>
                  {order.total ?? 0}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
