"use client";

import { useEffect, useRef } from 'react';

const VAR = '--project-card-min-h';

/**
 * Grid that keeps every collapsed project card the same height, even when an expanded card
 * (which spans the full row) splits the others across different rows.
 */
const ProjectGrid = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = ref.current;
        if (!grid) return;
        let frame = 0;

        const measure = () => {
            frame = 0;
            // Single column (phones): natural heights read better than padded ones.
            const columns = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
            if (columns < 2) {
                grid.style.removeProperty(VAR);
                return;
            }
            const cards = [...grid.children].filter(
                (el): el is HTMLElement => el instanceof HTMLElement && !el.dataset.expanded
            );
            // Read natural heights: drop the min-height and the row stretch for a moment.
            const previous = grid.style.getPropertyValue(VAR);
            grid.style.setProperty(VAR, '0px');
            grid.style.alignItems = 'start';
            const tallest = Math.max(0, ...cards.map((card) => card.offsetHeight));
            grid.style.alignItems = '';
            const next = `${tallest}px`;
            grid.style.setProperty(VAR, previous === next ? previous : next);
        };

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(measure);
        };

        const resize = new ResizeObserver(schedule);
        resize.observe(grid);
        // Cards toggling or "show more" adding cards.
        const mutations = new MutationObserver(schedule);
        mutations.observe(grid, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-expanded'] });
        schedule();

        return () => {
            resize.disconnect();
            mutations.disconnect();
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default ProjectGrid;
