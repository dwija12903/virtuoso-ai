// Here I have created diffrent functions which will be used across the whole application
import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

export function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt){
        return getRandomPrompt()
    }

    return randomPrompt
}

export async function downloadImage(id, photo) {
    FileSaver.saveAs(photo, `download-${id}.png`);
}