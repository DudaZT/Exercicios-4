def inverte_string(string)
    inverted_string = ""
    i = string.length - 1
    while i >= 0
        inverted_string += string[i]
        i -= 1
    end
    return inverted_string
end

string_original = "Hello, world!"
string_invertida = inverte_string(string_original)
puts "String original: #{string_original}"
puts "String invertida: #{string_invertida}"