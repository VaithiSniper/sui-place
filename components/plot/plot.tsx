import { Tile } from "../tile/tile";

const colors: string[] = ["blue", "gold", "white", "grey", "green"]

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default function Plot() {

    const grid: React.ReactNode[] = [];

    for (let i = 0; i < 10; i++) { // 10x10 grid
        const tiles: React.ReactNode[] = [];
        for (let j = 0; j < 10; j++) {
            const color = getRandomColor()
            console.log(color);
            const tile = <Tile color={color} />
            tiles.push(tile)
        }
        const row: React.ReactNode = <div className="w-full my-1 flex flex-row gap-1">{...tiles}</div>
        grid.push(row)
    }
    return (
        <div className="justify-center text-center items-center mt-6">
            {
                grid.map((row) => row)
            }
        </div>
    )
}
