import { FC, useCallback, useEffect, useRef } from 'react';

interface ImageDropEventAdapterProps {
    dragIn?: () => void;
    dragOut?: () => void;
    drop?: (e: DragEvent) => void;
    dragOver?: () => void;
}
const ImageDropEventAdapter: FC<ImageDropEventAdapterProps> = (props) => {
    const dragRef = useRef<HTMLDivElement | null>(null);
    const { dragIn, dragOut, drop, dragOver, children } = props;

    const handleDragIn = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        dragIn && dragIn();
    }, []);

    const handleDragOut = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        dragOut && dragOut();
    }, []);

    const handleDrop = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        drop && drop(e);
    }, []);

    const handleDragOver = useCallback((e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        dragOver && dragOver();
    }, []);

    const initDragEvents = useCallback((): void => {
        if (dragRef.current !== null) {
            dragRef.current.addEventListener('dragenter', handleDragIn);
            dragRef.current.addEventListener('dragleave', handleDragOut);
            dragRef.current.addEventListener('dragover', handleDragOver);
            dragRef.current.addEventListener('drop', handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const resetDragEvents = useCallback((): void => {
        if (dragRef.current !== null) {
            dragRef.current.removeEventListener('dragenter', handleDragIn);
            dragRef.current.removeEventListener('dragleave', handleDragOut);
            dragRef.current.removeEventListener('dragover', handleDragOver);
            dragRef.current.removeEventListener('drop', handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    useEffect(() => {
        initDragEvents();
        return () => resetDragEvents();
    }, []);

    return <div ref={dragRef}>{children}</div>;
};

export default ImageDropEventAdapter;
