export default function Index({ link, title, description, ...props }) {
  return (
    <a
      href={link}
      className="m-4 max-w-[300px] rounded-lg border p-6 text-left transition-colors duration-150 hover:border-indigo-500 hover:text-indigo-500 focus:border-indigo-500 focus:text-indigo-500 active:border-indigo-500 active:text-indigo-500 dark:hover:border-sky-500 dark:hover:text-sky-500 dark:focus:border-sky-500 dark:focus:text-sky-500 dark:active:border-sky-500 dark:active:text-sky-500"
      {...props}
    >
      <h2 className="mb-4 text-2xl font-semibold">{title} &rarr;</h2>
      <p className="text-xl">{description}</p>
    </a>
  );
}
