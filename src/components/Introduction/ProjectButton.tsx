import {Button} from "../Ui/Buttons/Stateful-button.tsx";

function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        const navbarHeight = 64; // Adjust based on your navbar height (e.g., 16 * 4 = 64px)
        const offsetTop = section.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

export function ProjectsButton() {
    return (
        <Button onClick={() => scrollToSection("projects")} >Projects</Button>
    );
}