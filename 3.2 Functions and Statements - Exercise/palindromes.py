def findPalindromes(array):
    for currentNumber in array:
        number_as_string = str(currentNumber)

        reversed_number = number_as_string[::-1]

        if number_as_string == reversed_number:
            print('true')
        else:
            print('false')


findPalindromes([100,100,101,1,12321])
