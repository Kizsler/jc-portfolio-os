import React, { useState, useRef, useEffect } from 'react';
import Colors from '../../constants/colors';

export interface ImageModalProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0 });
    const lastPosition = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setZoom(1);
            setPosition({ x: 0, y: 0 });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = () => {
        setZoom(prev => {
            const newZoom = Math.max(prev - 0.5, 1);
            if (newZoom === 1) {
                setPosition({ x: 0, y: 0 });
            }
            return newZoom;
        });
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY };
        lastPosition.current = { ...position };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            const deltaX = e.clientX - dragStart.current.x;
            const deltaY = e.clientY - dragStart.current.y;
            setPosition({
                x: lastPosition.current.x + deltaX,
                y: lastPosition.current.y + deltaY,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            setZoom(prev => Math.min(prev + 0.25, 4));
        } else {
            setZoom(prev => {
                const newZoom = Math.max(prev - 0.25, 1);
                if (newZoom === 1) {
                    setPosition({ x: 0, y: 0 });
                }
                return newZoom;
            });
        }
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <div style={styles.windowBorderOuter}>
                    <div style={styles.windowBorderInner}>
                        <div style={styles.topBar}>
                            <div style={styles.windowHeader}>
                                <p className="showcase-header">{alt}</p>
                            </div>
                            <div style={styles.windowTopButtons}>
                                <div style={styles.windowButton} onClick={handleZoomOut}>
                                    <span style={styles.buttonIcon}>−</span>
                                </div>
                                <div style={styles.windowButton} onClick={handleZoomIn}>
                                    <span style={styles.buttonIcon}>+</span>
                                </div>
                                <div style={styles.windowButton} onClick={onClose}>
                                    <span style={styles.buttonIcon}>×</span>
                                </div>
                            </div>
                        </div>
                        <div
                            style={styles.contentOuter}
                            ref={containerRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onWheel={handleWheel}
                        >
                            <div style={styles.contentInner}>
                                <img
                                    src={src}
                                    alt={alt}
                                    style={{
                                        ...styles.image,
                                        transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                                        cursor: isDragging ? 'grabbing' : 'grab',
                                    }}
                                    draggable={false}
                                />
                            </div>
                        </div>
                        <div style={styles.bottomBar}>
                            <div style={styles.statusSection}>
                                <p style={styles.bottomText}>Zoom: {Math.round(zoom * 100)}%</p>
                            </div>
                            <div style={styles.statusSection}>
                                <p style={styles.bottomText}>Drag to pan • Scroll to zoom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
    },
    modalContainer: {
        width: '70vw',
        height: '70vh',
        maxWidth: 900,
        maxHeight: 600,
        backgroundColor: Colors.lightGray,
        display: 'flex',
        flexDirection: 'column',
    },
    windowBorderOuter: {
        border: `1px solid ${Colors.black}`,
        borderTopColor: Colors.lightGray,
        borderLeftColor: Colors.lightGray,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    windowBorderInner: {
        border: `1px solid ${Colors.darkGray}`,
        borderTopColor: Colors.white,
        borderLeftColor: Colors.white,
        padding: 2,
        flexDirection: 'column',
        display: 'flex',
        flex: 1,
    },
    topBar: {
        backgroundColor: Colors.blue,
        width: '100%',
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 2,
        paddingLeft: 4,
        boxSizing: 'border-box',
    },
    windowHeader: {
        flex: 1,
        color: Colors.white,
    },
    windowTopButtons: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    windowButton: {
        width: 16,
        height: 14,
        backgroundColor: Colors.lightGray,
        border: `1px solid ${Colors.black}`,
        borderTopColor: Colors.white,
        borderLeftColor: Colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    buttonIcon: {
        fontSize: '12px',
        fontWeight: 'bold',
        color: Colors.black,
        lineHeight: 1,
        fontFamily: 'Arial, sans-serif',
    },
    contentOuter: {
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        borderLeftColor: Colors.darkGray,
        marginTop: 8,
        marginBottom: 8,
        overflow: 'hidden',
        flex: 1,
        display: 'flex',
    },
    contentInner: {
        border: `1px solid ${Colors.lightGray}`,
        borderTopColor: Colors.black,
        borderLeftColor: Colors.black,
        overflow: 'hidden',
        backgroundColor: '#1a1a1a',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        display: 'block',
        transition: 'transform 0.1s ease-out',
        userSelect: 'none',
    },
    bottomBar: {
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statusSection: {
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        borderLeftColor: Colors.darkGray,
        padding: '2px 8px',
        flex: 1,
        marginRight: 2,
    },
    bottomText: {
        fontSize: 11,
        color: Colors.darkGray,
        fontFamily: 'MSSerif',
    },
};

export default ImageModal;
