const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    requestAnimationFrame(main)
}

main()