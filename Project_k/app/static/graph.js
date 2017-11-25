class Graph {

    constructor(currencies, exchanges) {
        this.currencies = currencies;
        this.exchanges = exchanges;
        this.currencieIds = [];
    }


    showGraph() {
        var div = document.getElementById("graph");
        div.style.width = "80%";
        div.style.height = "90%";
        div.style.left = "10%";
        div.style.top = "15px";
        div.style.position = "absolute";
        div.style.border = "solid";



        this.cy = cytoscape({
            container: div,

            layout: {
                name: 'cose',
                padding: 10
            },

            style: cytoscape.stylesheet()
                .selector('node')
                .style({
                    'shape': 'ellipse',
                    'content': 'data(name)',
                    'text-valign': 'center',
                    'text-outline-width': 1,
                    'text-outline-color': '#afb1b0',
                    'background-color': '#afb1b0',
                    'color': '#fff'
                })
                .selector(':selected')
                .style({
                    'border-width': 2,
                    'border-color': '#525453'
                })
                .selector('edge')
                .style({
                    'opacity': 0.666,
                    'width': 1,
                    'line-color': 'data(faveColor)',
                    'target-arrow-shape': 'triangle'
                })
                .selector(':selected')
                .style({
                    'border-width': 2,
                    'border-color': '#525453'
                }),

            elements: {
                nodes: this._setNodes(),
                edges: this._setEdges()
            }
        });
    }

    _setNodes() {
        var result = [];

        for(let i=0; i<this.currencies.length; i++) {
            result.push({data: this.currencies[i]});
            //Keep track of existing nodes
            this.currencieIds.push(this.currencies[i]['id']);
        }

        return result
    }

    _setEdges() {
        var result = [];

        for (let i = 0; i < this.exchanges.length; i++) {
            for (let j = 0; j < this.exchanges[i].length; j++) {
                var pair = this.exchanges[i][j]['pair'].split("/");

                //Set edges only between existing nodes
                if(this.currencieIds.includes(pair[0]) && this.currencieIds.includes(pair[1])) {
                    result.push({data: {source: pair[0], target: pair[1], faveColor: '#6FB1FC', strength: 10}});
                }
            }
        }

        return result
    }
}