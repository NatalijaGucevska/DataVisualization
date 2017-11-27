function scrollBox(data_) {

    let h = 500
    let w = 155

    let box = d3.select("body")
                .append("div")
                    .attr("class", "box")

    let scrollBox = box.append("div")
                    .attr("class", "scrollBox")
                    .attr("style", "outline: 3px solid black;")

    let nameBox = scrollBox.selectAll("div")
                    .data(data_)
                    .enter()
                    .append("div")
                    .attr("class", "nameBox")
                    .attr("height", 24)
                    .attr("width", 25)
                    //.attr("transform", (d,i) => "translate(3,"+0.2*i+")");

    let svg = nameBox.append("svg")
                        .attr("class", "row")
                        .attr("height", 24)
                        .attr("width", w - 25);

    let rect = svg.append('rect')
                    .attr("height", 24)
                    .attr("width", w - 25)
                    .attr("rx", 3)
                    .attr("ry", 3)
                    .attr("fill-opacity", 0.25)
                    .attr("stroke", "#999999")
                    .attr("stroke-width", "2px")
                    .attr("fill", "#1f77b4");

    let text = svg.append('text')
                    .text((d) => d)
                    .attr("transform","translate(10,15)");

    let inp = nameBox.append("input")
                    .attr("type","checkbox")
                    .attr("class", "check")
                    .attr("value", (d) => d)
                    .on("change",function() {
                        check = d3.select("checkbox")
                        console.log(this.checked);
                        console.log(this.value);
                        return [this.checked, this.value]
                    })
                    .attr("checked", true);



    let boutons = box.append("div")
                    .attr("class", "boutons")
                    .attr("height", 100)
                    .attr("width", w)

    let check_all = boutons.append("button")
                    .attr("class", "bouton_check")
                    .on("click", () => {
                        let list_to_check = document.getElementsByClassName("check");
                        for(let i =0; i<list_to_check.length; i++){
                            list_to_check[i].checked = true;
                        }
                    })
                    .text("Check All")

    let uncheck_all = boutons.append("button")
                        .attr("class", "bouton_uncheck")
                        .on("click", () => {
                            let list_to_check = document.getElementsByClassName("check");
                            for(let i =0; i<list_to_check.length; i++){
                                list_to_check[i].checked = false;
                            }
                        })
                        .text("Uncheck All")

}
