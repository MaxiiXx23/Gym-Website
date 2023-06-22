import { motion } from "framer-motion";

import { IClass, SelectedPage } from "../../shared/types";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";
import { HText } from "../../components/HText";
import { Class } from "../../components/Class";

const classes: IClass[] = [
    {
        id: "dc25bbdf-95af-4d83-acee-e5a584a545cd",
        name: "Weight Training Classes",
        description:"Perfect your strength and sculpt your muscles with our weightlifting classes. Our specialized trainers will guide you through effective routines, providing personalized guidance and proper techniques. Get ready to reach new levels of strength and achieve the body of your dreams!",
        image: Image1,
    },
    {
        id: "c9fdb258-f90e-4dac-b6ad-e0027049a0f7",
        name: "Yoga Classes",
        description: "Find inner peace and strengthen your body with our yoga classes. Our experienced instructors will guide you through practices that combine postures, breathing, and meditation, providing a perfect balance of relaxation and strength. Come connect with yourself and discover the transformative benefits of yoga.",
        image: Image2,
    },
    {
        id: "d3730487-b937-40c1-acfb-a19ff2a75919",
        name: "Ab Core Classes",
        description:"Achieve a stronger core with our basic abdominal classes. Designed for beginners and practitioners of all levels, these focused classes provide effective training to strengthen and tone the abdominal muscles. Join us to push your limits and achieve visible results!",
        image: Image3,
    },
    {
        id: "33272c97-909e-4604-9289-fb6cfb22b3a1",
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Image4,
    },
    {
        id: "f8bba971-ad7d-46d6-ada0-850d7ce91f8e",
        name: "Fitness Classes",
        image: Image5,
    },
    {
        id: "7972d2ee-c402-43a4-85ef-4e28383ed107",
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: Image6,
    },
];


interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

export function OurClasses({ setSelectedPage }: IProps) {
    
    return (
        <section
            id="ourclasses"
            className="w-full bg-primary-100 py-20"
        >
            <div
                className="mx-auto w-5/6"
            >
                <motion.div 
                    className="md:w-3/5"
                    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
    
                    }}
                >
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                    Our classes are dynamic, engaging, and designed to cater to all fitness levels. With an experienced team of instructors, we offer a variety of classes ranging from high-intensity strength and cardio training to more soothing options like yoga and stretching
                    </p>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-full whitespace-nowrap">
                        {
                            classes.map((item) => (
                                <Class 
                                    key={item.id}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}