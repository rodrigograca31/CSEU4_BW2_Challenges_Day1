def containsDuplicate(numbers):

    # Approach 1
    unique = set()

    for num in numbers:
        if num in unique:
            return True
        else:
            unique.add(num)

    return False

    # Approach 2
    numbersSet = set(numbers)

    if len(numbers) != len(numbersSet):
        return True
    else:
        return False


result = containsDuplicate([9, 34, 67, 23, 3, 2, 3, 6])
print(result)
