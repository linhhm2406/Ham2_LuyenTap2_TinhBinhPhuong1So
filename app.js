function sqr(number) {
    let in_function_result=number*number;
    return in_function_result;
}

let input_number = parseInt(prompt('Nhap vao so can tinh binh phuong'));
let result=sqr(input_number);
document.write(result);