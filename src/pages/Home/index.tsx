import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { SelectedPage } from "../../shared/types";
import { ActionButton } from "../../components/ActionButton";
import { useMediaQuery } from "../../hooks/useMediaQueries";

import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";


interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

export function Home ({ setSelectedPage }: IProps) {

    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:full md:pb-0"
        >
            {/* Image and header */}
            <motion.div 
                className="md:flex mx-auto w-5/6 item-center justify-center md:h-5/6 pb-4"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                     {/* Headings */}
                     <motion.div 
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -100},
                            visible: { opacity:1, x: 0 }

                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt="Home Page Text" />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                     </motion.div>
                     {/* Actions */}
                     <motion.div 
                        className="mt-8 flex gap-8 items-center justify-start"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -100},
                            visible: { opacity:1, x: 0 }

                        }}
                    >
                        <ActionButton 
                            setSelectedPage={setSelectedPage}
                        >
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`${SelectedPage.ContactUs}`}
                        >
                            Contact Us
                        </AnchorLink>
                     </motion.div>
                </div>
                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-8 md:justify-items-end">
                    <img src={HomePageGraphic} alt="HomePageGraphic" />
                </div>
            </motion.div>
            {/* Sponsors */}
            {
                isAboveMediumScreen && (
                    <div className="h-[150px] w-full bg-primary-100 py-10">
                        <div className="mx-auto w-5/6">
                            <div className="flex items-center justify-between gap-8">
                                <img src={SponsorRedBull} alt="SponsorRedBull" />
                                <img src={SponsorForbes} alt="SponsorForbes" />
                                <img src={SponsorFortune} alt="SponsorFortune" />
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}