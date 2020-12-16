function solution(N, users) {
    var answer = [];
    var rate = [];
    var divider = 0;

    for (i = 1; i <= N; i++) {
        var count = users.reduce(function (n, val) {
            return n + (val === i);
        }, 0);
        rate.push([count / (users.length - divider), i]);
        divider += count;
    }

    answer = rate.sort(function (a, b) { return b[0] - a[0] }).map(arr => arr[1]);

    return answer;
}