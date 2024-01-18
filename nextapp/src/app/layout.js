import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

// // metadata는 서버 컴포넌트에서만 사용
export const metadata = {
  title: "Web tutorials",
  description: "Generated by create next app",
};
export default async function RootLayout({ children }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"topics", { cache: 'no-store' });
  const topics = await res.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
          <Control />
      </body>
    </html>
  );
}