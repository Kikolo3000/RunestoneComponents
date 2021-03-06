$.i18n().load({
    "es": {
        "msg_activecode_load_history": "Cargar Historial",
        "msg_activecode_audio_tour": "Audio guía",
        "msg_activecode_loaded_code": "Tu código guardado ha sido cargado.",
        "msg_activecode_no_saved_code": "No existe código guardado.",
        "msg_activecode_run_code": "Ejecutar",
        "msg_activecode_show_feedback": "Mostrar comentarios",
        "msg_activecode_show_code": "Mostrar código",
        "msg_activecode_hide_code": "Ocultar código",
        "msg_activecode_show_codelens": "Mostrar CodeLens",
        "msg_activecode_show_in_codelens": "Mostrar en CodeLens",
        "msg_activecode_hide_codelens": "Ocultar Codelens",

        "msg_activecode_parse_error": "Un 'parse error' significa que Python no entiende la sintáxis de la línea a la que el error apunta. Ejemplos comunes son olvidar las comas entre argumentos o olvidar ':' en los bucles 'for'",
        "msg_activecode_parse_error_fix": "Para solucionar un 'parse error' tienes que revisar la línea que contiene el error y posiblemente la línea anterior. Asegúrate que sigue las relgas de Python.",
        "msg_activecode_type_error": "'Type errors' suelen ocurrir cuando una expresión intenta combinar dos tipos de objetos distintos que no deben ser combinados.  Por ejemplo, elevar un cadena de caracteres a una potencia",
        "msg_activecode_type_error_fix": "Para solucionar un 'type error' probablemente necesites revisar tu código y asegurarte que las variables son del tipo que esperas.  Podría ser útil imprimir por pantalla cada variable que encuentres para asegurarte que su valor es lo que esperas que sea.",
        "msg_activecode_name_error": "Un 'name error' casi siempre significa que has utilizado una variable antes de que tenga un valor.  Habitualmente puede ser un simple error de escritura, así que revisa la ortografía.",
        "msg_activecode_name_error_fix": "Revisa la parte derecha de las declaraciones y las llamadas a tu función. Este es el lugar más habitual donde solucionar un error tipo 'NameError'.",
        "msg_activecode_value_error": "Un 'ValueError' ocurre habitualmente al pasar un parámetro determinado a una función, cuando la función espera un tipo de parámetro y se le pasa uno distinto.",
        "msg_activecode_value_error_fix": "El mensaje de error te da una buena pista del nombre de la función así como del valor que es incorrecto. Lee atentamente el mensaje de error y vuelve hacia atrás hasta la variable que contiene el valor problemático.",
        "msg_activecode_attribute_error": "Este error te está diciendo que el objeto a la izquierda del punto no tiene el atributo o el método a la derecha del mismo.",
        "msg_activecode_attribute_error_fix": "La variante más habitual de este error es que el objeto no definido no tiene el atributo X.  Esto te informa de que el objeto a la izquierda del punto no es lo que crees que es. Revisa la variable y muéstrala por pantalla en varios lugares hasta que descubras dónde deja de estar definida correctamente. También puede que sea útil revisar el atributo a la derecha del punto para comprobar que no tiene errores ortográficos.",
        "msg_activecode_token_error": "Casi siempre este error indica que te has olvidado de cerrar unos paréntesis o unas comillas.",
        "msg_activecode_token_error_fix": "Revisa cada línea de tu programa y verifica que los paréntesis están balanceados.",
        "msg_activecode_time_limit_error": "Tu programa está en ejecución demasiado tiempo.  La mayor parte de los ejercicios de este curso pueden ejecutarse en menos de 10 segundos.  Esto indica que, probablemente, tu programa haya caído en un bucle infinito.",
        "msg_activecode_time_limit_error_fix": "Añade unos cuantos 'print' para darte cuenta si tu programa está en un bucle infinito. Si no es así, puedes aumentar el tiempo de ejecución con el comando 'sys.setExecutionLimit(msecs)'",
        "msg_activecode_general_error":  "Tu programa está en ejecución demasiado tiempo.  La mayor parte de los ejercicios de este curso pueden ejecutarse en menos de 30 segundos.  Esto indica que, probablemente, tu programa haya caído en un bucle infinito.",
        "msg_activecode_general_error_fix": "Añade unos cuantos 'print' para darte cuenta si tu programa está en un bucle infinito. Si no es así, puedes aumentar el tiempo de ejecución con el comando 'sys.setExecutionLimit(msecs)'",
        "msg_activecode_syntax_error": "Este mensaje indica que Python no entiende la sintáxis de un determinado comando.  Algunos ejemplos son la asignación a un número o una llamada a una función",
        "msg_activecode_syntax_error_fix": "Revisa las asignaciones y asegúrate de que la parte de la izquierda del igual es una variable y no un número literal o una función.",
        "msg_activecode_key_error": "Este mensaje indica que estás intentando acceder a un elemento de un diccionario, pero el diccionario no tiene la clave que estás usando.",
        "msg_activecode_key_error_fix": "Puede que tengas un error de escritura en la clave. También es una buena práctica comprobar si la clave existe con un comando del tipo 'if key in mydict'. También puedes usar 'mydict.get(key,defaultvalue)' para que, en el caso en el que la clave no esté en el diccionario, obtengas el valor por defecto en lugar de un error.",
        "msg_activecode_index_error": "Este mensaje indica que estás intentando acceder a un índice más alto que el último de la cadena de caracteres o lista. Por ejemplo, si tu lista tiene 3 cosas y estás intentando acceder al índice en la posición 3 o más.",
        "msg_activecode_index_error_fix": "Recuerda que al primer elemento de una cadena de caracteres o lista se accede con el índice 0. A menudo este mensaje aparece porque estás fuera del rango por uno. Recuerda que en una lista de longitud 3 el último índice permitido es 2.",
        "msg_activecode_uri_error": "",
        "msg_activecode_uri_error_fix": "",
        "msg_activecode_import_error": "Este mensaje de error indica que estás intentando importar un módulo que no existe",
        "msg_activecode_import_error_fix": "El problema puede venir de que simplemente tengas un error de escritura. También puede que estés intentando importar un módulo que exista en Python 'real', pero no en este curso.  Si este es el caso, puedes enviar una petición para añairlo.",
        "msg_activecode_reference_error": "Probablemente este sea un error interno, especialmente si el mensaje referencia la consola.",
        "msg_activecode_reference_error_fix": "Intenta actualizar la página web, y si el error continua, envía un 'bug report' junto con tu código.",
        "msg_activecode_zero_division_error": "Este mensaje te indica que estás intentando dividir por 0. Esto usualmente viene de que la variable en el denominador de alguna división tiene valor 0.",
        "msg_activecode_zero_division_error_fix": "Puede que necesites proteger contra la división por 0 con un condicional 'if', o puede que necesites revisar tus suposiciones sobre el valor legal de determinadas variables. Podría tratarse de un comando anterior que de manera no esperada esté asignando el valor 0 a la variable en cuestión.",
        "msg_activecode_range_error": "Este error casí siempre se muestra en la forma de 'Maximum call stack size exceeded'.",
        "msg_activecode_range_error_fix": "Esto ocurre siempre que una función se llama a sí misma. Es posible que no estés haciendo esto a propósito. Excepto si intentas definir una recursión. En ese caso, puede que no hayas identificado correctamente el caso base.",
        "msg_activecode_internal_error": "Un error interno puede significar que has desencadenado un 'bug' en nuestro Python",
        "msg_activecode_internal_error_fix": "Envía este error como 'bug', junto con el código..",
        "msg_activecode_indentation_error": "Este error ocurre cuando no has indentado correctamente tu código.  Esto es más probable que ocurra como parte de un comando 'if', 'for', 'while' o 'def'.",
        "msg_activecode_indentation_error_fix": "Revisa tus comandos 'if', 'def', 'for', y 'while' para estar seguro de que las líneas después de ellos están correctamente indentadas. Otra fuente posible de este error es copiar y pegar código donde te hayas dejado accidentalmente algunos caracteres que no le pertenecen.",
        "msg_activecode_not_implemented_error": "Este error ocurre cuando intentas utilizar una funcón nativa de Python que no ha sido implementada en esta versión de Python para navegador.",
        "msg_activecode_not_implemented_error_fix": "Por el momento, la única manera de solucionar este problema es no utilizar la función.  Puede haber soluciones alternativas.  Si realmente necesitas esta función nativa, envía un informe de error explicando por qué estás intentando utilizar esta función.",

        "msg_activecode_file_not_found": "Archivo no encontrado: '$1'",
        "msg_activecode_no_file_or_dir": "[Errno 2] No se encuentra el archivo o carpeta especificado: '$1'",
        "msg_activecode_starting": "Haz clic en el boton de reproducción para comenzar $1",
        "msg_activecode_playing": "Reproduciendo $1",
        "msg_activecode_loading_audio": "Cargando audio.  Por favor, espera.   Si el 'tour' no comienza pronto, haz clic en 'Parar Tour' y vuelve a intentarlo.",
        "msg_activecode_pause_current_audio": "Pausar audio actual",
        "msg_activecode_pause_audio": "Pausar audio",
        "msg_activecode_play_paused_audio": "Reproducir audio pausado",
        "msg_activecode_audio_paused": "$1 ha sido pausado. Haz clic en el boton 'reproducir' para recomenzar el 'tour'.",
        "msg_activecode_input_prg": "Entrada del programa",
        "msg_activecode_were_compiling_err": "Se han producido errores al compilar tu código. Mira a continuación.",
        "msg_activecode_time_limit_exc": "El tiempo máximo de ejecución ha sido excedido en tu programa",
        "msg_activecode_server_err": "Se ha producido un error de servidor: $1 $2",
        "msg_activecode_compiling_running": "Compilando y ejecutando tu código ahora...",
        "msg_activecode_server_comm_err": "Error de comunicación con el servidor.",
        "msg_activecode_save_run": "Guardar y ejecutar",
        "msg_activecode_render": "Guardar y procesar",
        "msg_activecode_assertion_error": "Ha ocurrido un 'assertion error' cuando el intérprete Python encontró un 'assertion statement'.  Python evalua la expresión a la derecha de la palabra 'assert'; si esa expresión es verdadera, todo va bien y el programa continua.  Si esa expresión es falsa, Python devuelve un error y se detiene.",
        "msg_activecode_assertion_error_fix":  "Revisa la expresión a la derecha del 'assert'.  La expresión es falsa y tienes que determinar por qué.  Podría ser útil imprimir por pantalla parte de la expresión evaluada, para entender por qué el resultado es falso.",
        "msg_activecode_load_db": "Cargando DB...",

    }
});
