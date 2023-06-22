import { GraduationCap, UserSquare, Barbell } from "phosphor-react";
import { motion } from "framer-motion";

import { IBenefits, SelectedPage } from "../../shared/types";
import { HText } from "../../components/HText";
import { Benefit } from "../../components/Benefit";
import { ActionButton } from "../../components/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}


const benefits: IBenefits[] = [
    {
        id: "75f79fec-9f15-4d8e-81d9-84f3caede775",
        icon: <Barbell className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Discover our state-of-the-art gym facilities! Enjoy modern exercise equipment, spacious areas, and motivating environments to help you achieve your fitness goals. Come and experience excellence in fitness!"
    },
    {
        id: "86adb601-a39a-4498-ac01-f73652b8306c",
        icon: <UserSquare className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Discover the power of variety at our gym! With an extensive schedule of over hundreds of classes, including HIIT, Pilates, boot camp, and more, you'll find endless opportunities to challenge yourself and reach new fitness heights."
    },
    {
        id: "5ebc8605-3f9a-4048-8f68-a54f1ad82d15",
        icon: <GraduationCap className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Train with the best! Our gym is proud to have a team of expert and professional trainers who are dedicated to helping you reach your fitness goals. Get personalized guidance, professional expertise, and unwavering support on your fitness journey."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

export function Benefits({ setSelectedPage }: IProps) {

    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }

                    }}
                >
                    <HText>MORE THAN JUS GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}

                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                >
                    {
                        benefits.map((benefit: IBenefits) => (
                            <Benefit
                                key={benefit.id}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))
                    }
                </motion.div>

                {/* Graphics and description */}
                <div className="md:flex md:mt-16 items-center justify-between gap-8">
                    {/* Graphic */}
                    <img
                        className="mx-auto"
                        src={BenefitsPageGraphic}
                        alt="benefits-page-graphic"
                    />

                    {/* Container Description */}
                    <div>
                        {/* Title */}
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 }

                            }}
                        >
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <div>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT.</span>
                                    </HText>
                                </div>
                            </div>
                        </motion.div>
                        {/* Description */}
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: 0.3, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 }

                            }}
                        >
                            <p className="my-5">
                            At our gym, the happiness and satisfaction of our clients are our greatest achievement. We take pride in providing a welcoming and motivating environment, state-of-the-art equipment, and a team of passionate and dedicated instructors. Here, our clients find a place where their fitness goals become a reality while enjoying constant and uplifting support
                            </p>
                            <p className="mb-5">
                            Seeing the smiles on our clients' faces and hearing the inspiring testimonials of their transformative journeys is proof that we are fulfilling our mission to promote health, well-being, and happiness in their lives. Join us and become part of this vibrant community where satisfaction is our motto.
                            </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton
                                    setSelectedPage={setSelectedPage}
                                >
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>

    )

}