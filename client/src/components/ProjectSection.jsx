import React from "react";

const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod interdum urna vitae vehicula.",
            imageUrl: "/project_image1.jpeg",
            demoUrl: "#", // Replace with actual project URL
            githubUrl: "#" // Replace with actual GitHub repository URL
        },
        {
            id: 2,
            title: "Project 2",
            description:
                "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            imageUrl: "/project_image2.jpeg",
            demoUrl: "#", // Replace with actual project URL
            githubUrl: "#" // Replace with actual GitHub repository URL
        },
        {
            id: 3,
            title: "Project 3",
            description:
                "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In ac dui quis mi.",
            imageUrl: "/project_image3.jpeg",
            demoUrl: "#", // Replace with actual project URL
            githubUrl: "#" // Replace with actual GitHub repository URL
        }
    ];

    return (
        <section data-aos="fade-up" className="project-section py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                    Projects
                </h2>
                <div
                  
                    className="container gap-8 mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-center"
                >
                    {projects.map(project => (
                        <div
                            
                            key={project.id}
                            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-48 object-cover object-center"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
                                    >
                                        Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
