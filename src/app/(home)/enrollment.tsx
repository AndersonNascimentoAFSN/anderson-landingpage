import Link from "next/link";
import { track } from "@vercel/analytics";

export function Enrollment() {
  return (
    <Link
      href='https://www.google.com.br'
      target="_blank"
      rel="noopener noreferrer"
      className='bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
      onClick={
        () => {
          track('enrollment', { location: 'investment' })
        }
      }
    >
      Matricular
    </Link>
  )
}
