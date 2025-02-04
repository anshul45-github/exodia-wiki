import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FeedWrapper } from "@/components/sheet-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image src="/adventurer_action1.png" alt="Adventurer" width={90} height={90} />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Exodia</h1>
                </div>
                <p className="text-lg mb-6 border-t-2">
                    <p>
                        Exodia is the annual techno-cultural fest of Indian Institute of Technology Mandi. It is a three-day-long event held every year. The first edition was held in 2012 and since then it has grown to be one of the largest student-run college fests of the Himalayas. It is one of the biggest events of the Himalayan region and attracts crowds from throughout northern India. The fest also tries to promote the Himalayan region and showcase its culture and beauty by orchestrating some of its events for the same.
                    </p>
                </p>
                <div className="w-full flex flex-col items-center">
                    <Image src="/adventurer_action1.png" alt="Adventurer" width={90} height={90} />
                    <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Previous Highlights</h1>
                </div>
                <p className="text-lg mb-6 border-t-2">
                    <p>
                        Exodia is the annual techno-cultural fest of Indian Institute of Technology Mandi. It is a three-day-long event held every year. The first edition was held in 2012 and since then it has grown to be one of the largest student-run college fests of the Himalayas. It is one of the biggest events of the Himalayan region and attracts crowds from throughout northern India. The fest also tries to promote the Himalayan region and showcase its culture and beauty by orchestrating some of its events for the same.
                    </p>
                </p>
                <div className="flex flex-col max-w-4xl mx-auto pb-20 items-center">
                    <div className="p-4">
                        <div className="relative aspect-video">
                            <iframe width="900" height={"506.25"} src="https://www.youtube.com/embed/GtArDHgOt5A?si=039YR-fiaU4l3F3y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div>
                        <Link href={"https://www.youtube.com/watch?v=GtArDHgOt5A"} target="_blank">
                            <Button variant={"youtubeLink"}>
                            <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                                <h2 className="text-2xl font-semibold">
                                    Watch on YouTube
                                </h2>
                            </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </FeedWrapper>
        </div>
    )
}

export default page