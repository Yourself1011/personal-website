import imageToAscii from "image-to-ascii";
import { AnsiUp } from "ansi_up";
const ansi_up = new AnsiUp();

let path = process.argv[2];

imageToAscii(path, { size: { width: 27 }, white_bg: false }, (err, res) => {
    console.log(res);
    console.log(
        ansi_up
            .ansi_to_html(res)
            .replaceAll("\n", "<br/>\n")
            .replaceAll("> <", ">&nbsp;<"),
    );
});
