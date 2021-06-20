function greatGrandParent(a){
    let b = 20;
    function grandParent(c){
        var d = 30;
        function parent(e){
            let f = 40;
            function child(g){
                let h = 50;
                console.log(a,b,c,d,e,g,h);
            }
            return child;
        }
        return parent;
    }
    return grandParent;
}
greatGrandParent("a=234")("c=459")("e=999")("g=789");
