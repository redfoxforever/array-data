let userInfo, userInfo2

let data = []

while (true) {
    userInfo = prompt("Element Qo'shin yoki Obtashen Ex:(add, Ali), (del, Ali) yoki (stop)")

    if (userInfo == "stop" || userInfo == "") {
        break
    }

    userInfo2 = userInfo.split(' ')

    if (userInfo2[0] == 'add,' || userInfo2[0] == 'add' || userInfo2[0] == "add.") {

        userInfo2.shift()

        data.push(...userInfo2)

        console.log(data);

    } else if (userInfo2[0] == 'del' || userInfo2[0] == 'del,' || userInfo2[0] == 'del.') {

        userInfo2.shift()

        for (let i = 0; i < data.length; i++) {
            if (data[i] == userInfo2) {
                data.splice(i, 1)
            }
        }

        console.log(data);
    }
}