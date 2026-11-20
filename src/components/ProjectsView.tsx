"use client";

import { createContext, useContext, useMemo, useState } from 'react';

type ActiveSetter = React.Dispatch<React.SetStateAction<string | null>>;

interface ProjectsContextValue {
    active: string | null;
    setActive: ActiveSetter;
}

const ProjectsContext = createContext<ProjectsContextValue>({
    active: null,
    setActive: () => {},
});

export const useProjects = () => useContext(ProjectsContext);

interface ProjectsViewProps {
    /** Grid of compact cards (nothing open). */
    className: string;
    /** Layout while one project is open: it goes full-width on top, the rest become small buttons. */
    activeClassName: string;
    labelClassName: string;
    children: React.ReactNode;
}

/** Holds which project is open and switches the layout between the basic grid and the "one open" view. */
const ProjectsView = ({ className, activeClassName, labelClassName, children }: ProjectsViewProps) => {
    const [active, setActive] = useState<string | null>(null);
    const value = useMemo(() => ({ active, setActive }), [active]);

    return (
        <ProjectsContext.Provider value={value}>
            <div className={active ? activeClassName : className}>
                {active && <p className={labelClassName}>Other projects</p>}
                {children}
            </div>
        </ProjectsContext.Provider>
    );
};

export default ProjectsView;
