def getEvenFibonacciSum
    sum = 0
    i = 1
    j = 2
    while j < 4000000 do
        if i%2 == 0 then sum += i end
        if j%2 == 0 then sum += j end
        i = i+j
        j = i+j
    end
    return sum
end

puts getEvenFibonacciSum