#Algorithm practice in python

# Given a list, write a function that changes all positive numbers in the list to "big".
def big(input_array):
  for x, item in enumerate(input_array):
    if item > 0:
      input_array[x] = 'big'
  return input_array

test = big([-1, 3, 5, -5])
print(test)


#Given a list of numbers, create a function to replace the last value with the number of positive values.
def count_positives(input_array):
  counter = 0
  for number in input_array:
    if number > 0:
      counter += 1
  input_array[len(input_array)-1] = counter
  return input_array

test = count_positives([-1,1,1,1])
print(test)
test2 = count_positives([1,6,-4,-2,-7,-2])
print(test2)



#Create a function that takes a list and returns the sum of all the values in the list.
def sum_total(input_array):
  x = 0
  for number in input_array:
    x += number
  return x

test = sum_total([1,2,3,4])
print(test)


#Create a function that takes a list and returns the average of all the values
def average(input_array):
  output = 0
  for number in input_array:
    output += number
  output = output / len(input_array)
  return output

test = average([1,2,3,4])
print(test)


#Create a function that takes a list of numbers and returns the minimum value in the list. 
#If the list is empty, have the function return False.
def minimum(input_array):
  min = 0
  if not input_array:
    return False
  for number in input_array:
    if number < min:
      min = number 

  return min

test = minimum([37,2,1,-9])
print(test)
test2 = minimum([])
print(test2)


#Create a function that takes a list and returns a dictionary that has the 
#sumTotal, average, minimum, maximum and length of the list.
def list_to_dict(input_array):
  output = {}
  total = 0
  little = 0
  big = 0
  avg = 0
  length = 0

  for number in input_array:
    total += number
  little = min(input_array)
  big = max(input_array)
  length = len(input_array)
  avg = float(total / length)  

  output = {'sumTotal' : total, 'average' : avg, 'minimum' : little, 'maximum' : big, 'length' : length}
  return output

test = list_to_dict([37,2,1,-9])
print(test)



#Reverse List - Create a function that takes a list and return that list with 
#values reversed. Do this without creating a second list.
def reverse(input_array):
  size = (len(input_array))
  for item in range(len(input_array)-1, -1, -1):
      input_array.append(input_array[item])
  input_array[0:size:] =[]
  return input_array

test = reverse([37,2,1,-9])
print(test)

#Create a function that accepts a number as an input. Return a new list that 
#counts down by one, from the number (as the 0th element) down to 0 (as the last element).

def countdown(input):
  output = []
  for x in reversed(range(0, input+1)):
    output.append(x)
  return output
test = countdown(5)
print(test)



# Print and Return - Create a function that will receive a list with two numbers. 
# Print the first value and return the second.
def print_return(input_arr):
  print(input_arr[0])
  return(input_arr[1])
test = print_return([1,2])
print(test)


# First Plus Length - Create a function that accepts a list and returns the sum 
#of the first value in the list plus the list's length.
def first_plus(input_arr):
  sum = 0
  sum = input_arr[0] + len(input_arr)
  return sum

test = first_plus([1,2,3,4,5])
print(test)


# Values Greater than Second - Write a function that accepts a list and creates 
#a new list containing only the values from the original list that are greater 
#than its 2nd value. Print how many values this is and then return the new list. 
#If the list has less than 2 elements, have the function return False

def values_greater_than_second(input_arr):
  output_arr = []
  for x in input_arr:
    if x > input_arr[1]:
      output_arr.append(x)
    elif len(input_arr) < 2:
      return False
    elif input_arr[1] >= max(input_arr):
      return False
    elif input_arr[1] == min(input_arr):
      return False
  print(len(output_arr))
  return output_arr

test = values_greater_than_second([5,2,3,2])
print(test)



#Write a function that accepts two integers as parameters: size and value. 
#The function should create and return a list whose length is equal to the given
#size, and whose values are all the given value.
def length_and_value(size,value):
  output_arr = []
  for x in range(size):
    output_arr.append(value)
  return output_arr

test = length_and_value(4,7)
print(test)


#Set three variables: lowNum, highNum, mult. Starting at lowNum and going 
#through highNum, print only the integers that are a multiple of mult.
#For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9
def flex_counter(lowNum, highNum, mult):
  for x in range(lowNum, highNum+1):
    if x % mult == 0:
      print(x)

flex_counter(2, 9, 3)
