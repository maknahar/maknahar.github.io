def isPrime n
    #corner cases
    if n <= 1 then return false end
    if n <= 3 then return true end

    # This is checked so that we can skip
    # middle five numbers in below loop
    if n%2 == 0 || n%3 ==0 then return false end

    i=5
    while i*i<=n do
        if n%i ==0 || n%(i+2) == 0 then return false end
        i += 6
    end

    return true
end

isPrime(29)

def findNextPrime n
    20000.times do |i|
        if isPrime(n+i+1) then return n+i+1 end
    end
    return 1
end

def findLargestFactor n
    if n==0 then return 0 end
    if n==1 then return 1 end
    i = 2;
    while n>1 do
        if n%i == 0 then
            n=n/i
            next
        end
        i = findNextPrime(i)
    end
    return i
end

puts findLargestFactor(600851475143)