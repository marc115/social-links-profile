import { socials } from "@/constants/socials"
import Image from "next/image"
import { SocialLinkItem } from "./SocialLinkItem"

export const SocialLinksCard = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-off-black text-white">
            <div className="bg-dark-grey p-8 flex flex-col gap-y-5 rounded-lg items-center">
                <Image
                    className="rounded-full"
                    src='/avatar-jessica.jpeg'
                    width={100}
                    height={100}
                    alt="avatar"
                />
                
                <div className="flex flex-col items-center gap-y-2 font-semibold">
                    <h1 className="text-2xl">Jessica Randall</h1>
                    <p className="text-custom-green">London, United Kingdom</p>
                </div>

                <p>`&quot;`Front-end developer and avid reader`&quot;`</p>
                
                <div className="flex flex-col w-full gap-y-4">
                    {
                        socials.map(social => (
                            <SocialLinkItem key={social.name} social={social} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
