async function drawRothko() {


    // 1. Draw Dimensions

    const dimensions = {
        width: 800,
        height: 800,
        margin: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        }
    }

    dimensions.boundedWidth = dimensions.width
        - dimensions.margin.left
        - dimensions.margin.right

    dimensions.boundedHeight = dimensions.height
        - dimensions.margin.top
        - dimensions.margin.bottom

    // 2. Draw Wrappers & Bounds

    const wrapper = d3.select("#sketch")
        .append("svg")
        .attr("viewBox", `0 0 ${dimensions.height} ${dimensions.width}`)

    const bounds = wrapper.append("g")
        .style("translate", `transform(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)

    // 3. Data

    const paris = await d3.csv("./data/ParisHilton.csv", (d) => {
        d3.autoType(d)
        return d
    })

    const bbl = await d3.csv("./data/BBL.csv", (d) => {
        d3.autoType(d)
        return d
    })

    const formatMonth = d3.timeFormat("%B");

    const monthAccessor = d => formatMonth(d.month);


    console.log(monthAccessor(paris[0]))
    // console.log(bbl)


    // 4. SVG Groups

    const background = bounds.append("g")
    const lineChart = bounds.append("g")

    // 5. Scale

    // const timeScale = d3.scaleTime()
    //     .domain(d3.extent(surgery, yearAccessor))
    //     .range([320, 500])
    // // .nice()



} drawRothko()

