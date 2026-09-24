import { mailto, profile } from "@/data/site";
import { linkHover, sectionDivider } from "@/lib/styles";

export default function Footer() {
  return (
    <footer className={`py-10 ${sectionDivider}`}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 ${linkHover}`}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.54-.02 2.79-.02 3.17 0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
          <a href={mailto(profile.social.email)} className={linkHover}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
