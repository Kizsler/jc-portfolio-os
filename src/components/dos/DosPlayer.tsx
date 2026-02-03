import React, { useEffect, useRef, useState, useCallback } from 'react';

import { DosPlayer as Instance, DosPlayerFactoryType } from 'js-dos';

declare const Dos: DosPlayerFactoryType;

interface CommandInterface {
    simulateKeyPress: (...keyCodes: number[]) => void;
    sendKeyEvent: (keyCode: number, pressed: boolean) => void;
}

interface PlayerProps {
    width: number;
    height: number;
    bundleUrl: string;
    showConsole?: boolean;
    consoleHeight?: number;
}

// DOS key code mapping
const keyToDosCode: { [key: string]: number } = {
    'Backspace': 8, 'Tab': 9, 'Enter': 13, 'Escape': 27, ' ': 32,
    "'": 39, ',': 44, '-': 45, '.': 46, '/': 47,
    '0': 48, '1': 49, '2': 50, '3': 51, '4': 52,
    '5': 53, '6': 54, '7': 55, '8': 56, '9': 57,
    ';': 59, '=': 61,
    'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71,
    'h': 72, 'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78,
    'o': 79, 'p': 80, 'q': 81, 'r': 82, 's': 83, 't': 84, 'u': 85,
    'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90,
    'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71,
    'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78,
    'O': 79, 'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85,
    'V': 86, 'W': 87, 'X': 88, 'Y': 89, 'Z': 90,
    '[': 91, '\\': 92, ']': 93, '`': 96,
    'F1': 112, 'F2': 113, 'F3': 114, 'F4': 115, 'F5': 116,
    'F6': 117, 'F7': 118, 'F8': 119, 'F9': 120, 'F10': 121,
    'ArrowUp': 38, 'ArrowDown': 40, 'ArrowLeft': 37, 'ArrowRight': 39,
};

export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [dos, setDos] = useState<Instance | null>(null);
    const [ci, setCi] = useState<CommandInterface | null>(null);
    const [consoleInput, setConsoleInput] = useState('');
    const [consoleHistory, setConsoleHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const { showConsole = false, consoleHeight = 120 } = props;

    useEffect(() => {
        if (rootRef === null || rootRef.current === null) {
            return;
        }

        const root = rootRef.current as HTMLDivElement;
        const instance = Dos(root);

        setDos(instance);
        const elements = rootRef.current.getElementsByClassName('flex-grow-0');

        while (elements.length > 0) {
            elements[0].remove();
        }

        return () => {
            instance.stop();
        };
    }, [rootRef]);

    useEffect(() => {
        if (dos !== null) {
            dos.run(props.bundleUrl).then((commandInterface: CommandInterface) => {
                setCi(commandInterface);
            });
        }
    }, [dos, props.bundleUrl]);

    const sendCommand = useCallback((command: string) => {
        if (!ci) return;

        // Send each character as a key press
        for (const char of command) {
            const keyCode = keyToDosCode[char];
            if (keyCode) {
                ci.simulateKeyPress(keyCode);
            }
        }
        // Send Enter to execute
        ci.simulateKeyPress(13);
    }, [ci]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && consoleInput.trim()) {
            sendCommand(consoleInput);
            setConsoleHistory(prev => [...prev, consoleInput]);
            setConsoleInput('');
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (consoleHistory.length > 0) {
                const newIndex = historyIndex < consoleHistory.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setConsoleInput(consoleHistory[consoleHistory.length - 1 - newIndex] || '');
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setConsoleInput(consoleHistory[consoleHistory.length - 1 - newIndex] || '');
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setConsoleInput('');
            }
        } else if (e.key === 'Escape') {
            // Send Escape to DOSBox
            if (ci) ci.simulateKeyPress(27);
        }
    };

    const gameHeight = showConsole ? props.height - consoleHeight : props.height;

    return (
        <div style={{ width: props.width, height: props.height, position: 'absolute', display: 'flex', flexDirection: 'column' }}>
            <div
                ref={rootRef}
                style={{
                    width: props.width,
                    height: gameHeight,
                    position: 'relative',
                    flex: showConsole ? 'none' : 1,
                }}
            ></div>
            {showConsole && (
                <div style={styles.consoleContainer as React.CSSProperties}>
                    <div style={styles.consoleHeader as React.CSSProperties}>
                        DOSBox Console - Type commands and press Enter
                    </div>
                    <div style={styles.consoleInputContainer as React.CSSProperties}>
                        <span style={styles.prompt as React.CSSProperties}>C:\&gt;</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={consoleInput}
                            onChange={(e) => setConsoleInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={styles.consoleInput as React.CSSProperties}
                            placeholder="Enter DOS command..."
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </div>
                    <div style={styles.consoleHelp as React.CSSProperties}>
                        Tips: Use ↑/↓ for history | ESC to send Escape | Common: dir, cd, exit
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    consoleContainer: {
        backgroundColor: '#0c0c0c',
        borderTop: '2px solid #333',
        padding: '8px',
        fontFamily: 'Terminal, Consolas, monospace',
        fontSize: '14px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    consoleHeader: {
        color: '#888',
        fontSize: '11px',
        marginBottom: '8px',
        borderBottom: '1px solid #333',
        paddingBottom: '4px',
    },
    consoleInputContainer: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
    },
    prompt: {
        color: '#c0c0c0',
        marginRight: '8px',
    },
    consoleInput: {
        flex: 1,
        backgroundColor: 'transparent',
        border: 'none',
        color: '#00ff00',
        fontFamily: 'Terminal, Consolas, monospace',
        fontSize: '14px',
        outline: 'none',
    },
    consoleHelp: {
        color: '#666',
        fontSize: '10px',
        marginTop: '8px',
    },
};
