import "../../../node_modules/react-vis/dist/style.css"
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from "react-vis"

const Chart = () => {
    const data = [
        { x : 0,  y : 5 },
        { x : 0,  y : 6 },
        { x : 3,  y : 7 },
        { x : 1,  y : 8 },
        { x : 5,  y : 3 },
        { x : 8,  y : 4 },
        { x : 6,  y : 2 },
        { x : 2,  y : 4 },
        { x : 4,  y : 3 },
        { x : 6,  y : 9 },
    ]

    return (
        <div className={{ marginTop: "15px" }}>
            <XYPlot height={300} width={300}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="blue" />
                <LineSeries data={data} color="purple" />
            </XYPlot>
        </div>
    )
}

export default Chart;