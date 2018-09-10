import $ from 'jquery';

export default function addToDom(type, text){
    const elem = $(`<${type}>`, {text});
    $('#root').append(elem);
}