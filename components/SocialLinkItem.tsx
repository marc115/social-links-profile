import { Social } from "@/constants/socials"
import Link from "next/link"

interface Props {
    social: Social
}

export const SocialLinkItem = ({social}: Props) => {
  return (
    <Link href={social.link} target="_blank" className="bg-custom-grey rounded-md text-center py-3 px-5 cursor-pointer 
    hover:bg-custom-green hover:text-black font-semibold">
        {social.name}
    </Link>
  )
}
