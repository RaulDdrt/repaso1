function zodiac (day, month){

    if (day >= 21 && month == "Marzo" || day <= 20 && month == "Abril"){

        return "Tu signo del zodiaco es Aries"
    }

    else if (day >= 21 && month == "Abril" || day <= 20 && month == "Mayo"){

        return "Tu signo del zodiaco es Tauro"
    }

    else if (day >= 21 && month == "Mayo" || day <= 20 && month == "Junio"){

        return "Tu signo del zodiaco es Geminis"
    }

    else if (day >= 21 && month == "Junio" || day <= 22 && month == "Julio"){

        return "Tu signo del zodiaco es Cancer"
    }

    else if (day >= 23 && month == "Julio" || day <= 23 && month == "Agosto"){

        return "Tu signo del zodiaco es Leo"
    }

    else if (day >= 24 && month == "Agosto" || day <= 22 && month == "Septiembre"){

        return "Tu signo del zodiaco es Virgo"
    }

    else if (day >= 23 && month == "Septiembre" || day <= 23 && month == "Octubre"){

        return "Tu signo del zodiaco es Libra"
    }

    else if (day >= 24 && month == "Octubre" || day <= 22 && month == "Noviembre"){

        return "Tu signo del zodiaco es Escorpio"
    }

    else if (day >= 23 && month == "Noviembre" || day <= 21 && month == "Diciembre"){

        return "Tu signo del zodiaco es Sagitario"
    }

    else if (day >= 22 && month == "Diciembre" || day <= 20 && month == "Enero"){

        return "Tu signo del zodiaco es Capricornio"
    }

    else if (day >= 21 && month == "Enero" || day <= 19 && month == "Febrero"){

        return "Tu signo del zodiaco es Acuario"
    }

    else if (day >= 20 && month == "Febrero" || day <= 20 && month == "Marzo"){

        return "Tu signo del zodiaco es Piscis"
    }

}

// let zodiaco = zodiac(28,"Agosto")

// console.log(zodiaco)

function continent(country){

    if( country == "España" || country == "Francia" || country == "Reino Unido" || country == "Belgica" || country == "Malta"){

        return "Europa"
    }

    if( country == "Zimbawee" || country == "Marruecos" || country == "Egipto" || country == "Congo" || country == "Madagascar"){

        return "Africa"
    }

    if( country == "Japon" || country == "China" || country == "Korea del sur" || country == "Korea del norte" || country == "Tailandia"){

        return "Asia"
    }

    if( country == "Venezuela" || country == "Argentina" || country == "Uruguay" || country == "Paraguay" || country == "Colombia"){

        return "Sudamerica"
    }

    if( country == "USA" || country == "Mexico" || country == "Canada"){

        return "Norte America"
    }

    if( country == "Australia" || country == "Nueva Zelanda"){

        return "Oceania"
    }



}

// let continente = continent("Australia")

// console.log(continente)

