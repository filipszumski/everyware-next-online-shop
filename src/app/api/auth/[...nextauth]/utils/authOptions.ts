import * as bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";

import { SignInFormType } from "@/app/auth/signin/utils/types";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import { GetAccountDocument } from "@/graphql/generated/graphql";

type MappedSignInBodyType = {
  [K in keyof SignInFormType]: CredentialInput;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider<MappedSignInBodyType>({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;

        const userData = await authorizedApolloClient.query({
          query: GetAccountDocument,
          variables: {
            email: credentials.email,
          },
        });

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          userData.data?.account?.password || "",
        );

        if (
          !isPasswordValid ||
          credentials.email !== userData.data?.account?.email
        ) {
          return null;
        }

        if (userData.data.account) {
          const { email, id, name } = userData.data.account;

          return {
            id,
            email,
            name,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
