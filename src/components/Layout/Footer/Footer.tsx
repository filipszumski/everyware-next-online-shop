import { NewsletterForm } from "./NewsletterForm/NewsletterForm";

export const Footer = () => {
  return (
    <footer className="p-4 text-center bg-backgroundLight text-sm border-t-2 border-borderDefault text-textSecondary divide-y">
      <div className="p-2 pb-4 grid grid-cols-1 gap-2">
        <h2 className="text-lg">Newsletter</h2>
        <p>
          Subscribe to get notified about product launches, special offers and
          company news.
        </p>
        <NewsletterForm />
      </div>
      <p className="p-2 pt-4">
        &copy; {new Date().getFullYear()} Copywright. SzumSoft
      </p>
    </footer>
  );
};
