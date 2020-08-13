export default function delay(milisec) {
    return new Promise((resolve) => {
        setTimeout(resolve, milisec);
    });
}