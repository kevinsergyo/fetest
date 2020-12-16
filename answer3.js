function solution(relation) {
    var answer = 0;
    var colCount = relation[0].length;
    var arr = [];
    var array1 = [];
    var colToDel = [];

    function combinations(set, k) {
        var i, j, combs, head, tailcombs;
        if (k > set.length || k <= 0) {
            return [];
        }
        if (k == set.length) {
            return [set];
        }
        if (k == 1) {
            combs = [];
            for (i = 0; i < set.length; i++) {
                combs.push([set[i]]);
            }
            return combs;
        }
        combs = [];
        for (i = 0; i < set.length - k + 1; i++) {
            head = set.slice(i, i + 1);
            tailcombs = combinations(set.slice(i + 1), k - 1);
            for (j = 0; j < tailcombs.length; j++) {
                combs.push(head.concat(tailcombs[j]));
            }
        }
        return combs;
    }

    function isUnique(myArray) { return myArray.length === new Set(myArray).size; }

    for (i = 0; i < colCount; i++) {
        const el = relation.map(rel => rel[i]);
        arr.push(el);
    }

    relation = arr;

    while (--colCount > 0) {
        // console.log("Before ", JSON.stringify(relation));
        colToDel = [];
        arr = combinations(relation, relation.length - colCount);

        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                if (j == 0) {
                    array1 = arr[i][j];
                    if (isUnique(array1)) {
                        colToDel.push(i);
                        answer++;
                    }
                } else {
                    array1 = array1.map((e, k) => e + arr[i][j][k]);
                    if (isUnique(array1)) {
                        colToDel.push(i);
                        colToDel.push(j);
                        answer++
                    }
                }
            }
        }
        colToDel = Array.from(new Set(colToDel));
        for (i = colToDel.length - 1; i >= 0; i--) {
            relation.splice(i, 1);
            colCount--;
        }
        // console.log("After ", JSON.stringify(relation));
    }

    return answer;
}