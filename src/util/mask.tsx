function maskCep(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d{3})/, "$1-$2");
    return value;
}

function maskCpf(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return value;
}

function maskCnpj(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    return value;
}

function maskPhone(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    return value;
}

    const maskEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const maskName = /^[A-Za-z]{4}[A-Za-z]*/;
    const regexCpf = /^(\d{3})(\d{3})(\d{3})(\d{2})/;
    const regexCnpj = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
    const regexPhone = /^(\d{2})(\d{5})(\d{4})/;
    const regexCep = /^(\d{5})(\d{3})/;

export {maskCep, maskName, maskCpf, maskCnpj, maskPhone, maskEmail, regexCep, regexCnpj, regexCpf, regexPhone};