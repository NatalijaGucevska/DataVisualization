function accordion(nb_accordion, text, heights) {

    for(let i = 0; i < nb_accordion; i ++){
        let box = "box" + i

        let deploy_scrollBox = d3.select("body")
                                .append("button")
                                    .attr("class", "accordion")
                                    .text(text[i])


        d3.select("body")
            .append("div")
                .attr("class", box)
                .style("width", 160+"px")
                .style("height", 0+"px")
                .style("overflow", "hidden")
                .style("padding-left", 10+"px")
                .style("padding-right", 10+"px");
    }


    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            let transition = "all 0.8s"
            if (panel.style.height != 0 + "px"){
                panel.style.height = 0 + "px";
                panel.style.transition = transition
            } else {
                panel.style.height = heights[i] + "px";
                panel.style.transition = transition
            }
        }
    }
}


function scrollBox_button(idx, graph, check_name){

    let boutons = d3.select("body").selectAll(".box"+idx).append("div")
                    .attr("class", "boutons")
                    .style("background-color", "White")

    let check_all = boutons.append("button")
                    .attr("class", "bouton_check")
                    .on("click", () => {
                        let list_to_check = document.getElementsByClassName(check_name);
                        for(let i =0; i<list_to_check.length; i++){
                            list_to_check[i].checked = true;
                            if(check_name == "checkNode"){
                                graph.addNode(list_to_check[i].value);
                            }else{
                                // ici mettre la fonction pour les markets
                                //graph.addNode(list_to_check[i].value);
                                console.log(list_to_check[i].value);
                            }
                        }
                    })
                    .text("Check All")

    let uncheck_all = boutons.append("button")
                        .attr("class", "bouton_uncheck")
                        .on("click", () => {
                            let list_to_check = document.getElementsByClassName(check_name);
                            for(let i =0; i<list_to_check.length; i++){
                                list_to_check[i].checked = false;
                                if(check_name == "checkNode"){
                                    graph.removeNode( list_to_check[i].value);
                                }else{
                                    // ici mettre la fonction pour les markets
                                    //graph.removeNode( list_to_check[i].value);
                                    console.log(list_to_check[i].value)
                                }
                            }
                            let node_text = "Node";
                            document.getElementsByClassName("nodeText")[0].innerHTML = node_text;
                            let edge_text = "Source = s <br/> Target = t <br/> Volume = v";
                            document.getElementsByClassName("edgeText")[0].innerHTML = edge_text;
                        })
                        .text("Uncheck All")
}
