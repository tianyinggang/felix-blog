'use client';

const SkipToMain: React.FC = () => {
  return (
    <a
      role="button"
      className="py-2 px-3 absolute left-2 opacity-95 outline-brandPrimary dark:outline-brandAccentLight rounded-b-lg transition-transform -translate-y-52 focus:transform focus:translate-y-0 lg:text-xl z-50 bg-brandPrimary dark:bg-brandAccentLight text-textlight dark:text-backgroundDark"
      href="#main"
    >
      Skip to main content
    </a>
  );
};

export default SkipToMain;
