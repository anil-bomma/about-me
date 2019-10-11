let vowelCount = (str) => {
    try {
        let vowelList = 'aeiouAEIOU';
        let count = 0;

        for (let indx = 0; indx < str.length; indx++) {
            if (vowelList.indexOf(str[indx]) !== -1) {
                count += 1;
            }
        }
        return count;
    } catch (error) {
        return error;
    }

}

let updateContent = async (inputStr) => {
    let res = await vowelCount(inputStr);
    document.getElementById('vowelCount').innerHTML = res;
    document.getElementById('consCount').innerHTML = inputStr.length - res;
}


document.addEventListener('click', event => {
    if (event.target && event.target.id === 'submit') {
        event.preventDefault();
        let inputStr = document.querySelector('#vouInput').value;
        updateContent(inputStr);
        console.log(inputStr);
    }
});