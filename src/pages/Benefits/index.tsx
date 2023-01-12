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
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
    },
    {
        id: "86adb601-a39a-4498-ac01-f73652b8306c",
        icon: <UserSquare className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
    },
    {
        id: "5ebc8605-3f9a-4048-8f68-a54f1ad82d15",
        icon: <GraduationCap className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient."
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
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
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