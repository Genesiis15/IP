const url = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '528e72f22cmshe01bd3eeabf89ddp1b1108jsn946288786480',
        'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
    }
};


const fetchIpInfo = async (ip) => {
    try {
        const response = await fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`, options);
        const result = await response.json();
        console.log(result)

        $results.innerHTML = JSON.stringify(result, null, 2)

        return result
    } catch (error) {
        console.error(error);
    }
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $info = document.querySelector('#info')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$info.addEventListener('click', (event) => {
    console.log(event)
    event.preventDefault()
    fetch('https://api.ipify.org/?format=json')
        .then((res) => res.json())
        .then((res) => { fetchIpInfo(res.ip) })
})


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const { value } = $input
    if (!value) return

    $submit.setAttribute('disable', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = fetchIpInfo(value)
    console.log(ipInfo)


    $submit.removeAttribute('disable')
    $submit.removeAttribute('aria-busy')




















})