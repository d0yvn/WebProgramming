#1
par(mfrow=c(1,1))
 mu = 0.5; var = 1/12;
 
m = 1000
 n = 10000
 xbar = rep(0, m) # init value 0
 
 for (i in 1:m) {
 	x = runif(n) 
 	xbar[i] = mean(x)
 }
 
 xbar_mu = mean(xbar)
 xbar_var = var(xbar)
 cat('표본의 개수 = ', n,', 자료set의 개수 = ',m,'\n','모평균 = ',mu,', 표본평균의 평균 = ', xbar_mu,'\n','모분산 = ',var, ', var / n = ', var/n, ", 표본평균의 분산 = ", xbar_var, "\n")

hist(xbar, breaks="fd", prob=T)
curve(dnorm(x, mu, sqrt(var/n)),add=T)

#실습2
par(mfrow=c(1,1))
 mu = 0.5; var = 1/12;
 
m = 1000
 n = 10000
 xbar = rep(0, m) # init value 0
 
 for (i in 1:m) {
 	x = runif(n) 
 	xbar[i] = mean(x)
 }
 
 xbar_mu = mean(xbar)
 xbar_var = var(xbar)
 cat('표본의 개수 = ', n,', 자료set의 개수 = ',m,'\n','모평균 = ',mu,', 표본평균의 평균 = ', xbar_mu,'\n','모분산 = ',var, ', var / n = ', var/n, ", 표본평균의 분산 = ", xbar_var, "\n")

hist(xbar, breaks="fd", prob=T)
curve(dnorm(x, mu, sqrt(var/n)),add=T)

#실습3 #실습4

par(mfrow=c(2,2))
lambda = 5; mu = lambda; var = lambda

for (n in c(10,50,100,500)) {
m = n*10

xbar = rep(0,m)

for (i in 1:m) {
	x = rpois(n, lambda)
	xbar[i] = mean(x)
}

xbar_mu = mean(xbar)
xbar_var = var(xbar)

 cat('표본의 개수 = ', n,', 자료set의 개수 = ',m,'\n','모평균 = ',mu,', 표본평균의 평균 = ', xbar_mu,'\n','모분산 = ',var, ', var / n = ', var/n, ", 표본평균의 분산 = ", xbar_var, "\n")

hist(xbar, breaks="fd", prob=T)
curve(dnorm(x, mu, sqrt(var/n)),add=T)
}

#실습5

par(mfrow=c(2,2))
lambda = 1; mu = 1/lambda; var = 1/lambda^2 # exp(1) 모평균 1, 모분산1

for (n in c(10,100,1000,10000)) {
m = 10*n;

xbar = rep(0,m)

for (i in 1:m) {
	x = rexp(n, lambda)
	xbar[i] = mean(x)
}

xbar_mu = mean(xbar)
xbar_var = var(xbar)

 cat('표본의 개수 = ', n,', 자료set의 개수 = ',m,'\n','모평균 = ',mu,', 표본평균의 평균 = ', xbar_mu,'\n','모분산 = ',var, ', var / n = ', var/n, ", 표본평균의 분산 = ", xbar_var, "\n")

hist(xbar, breaks="fd", prob=T)
curve(dnorm(x, mu, sqrt(var/n)),add=T)
}


#실습6


#실습7
par(mfrow=c(2,2))
df = 3
for (n in c(10,100,10000,1000000)) {
m = 1000;

xbar = rep(0,m)

for (i in 1:m) {
	x = td(n, df)
	xbar[i] = mean(x) 
}

xbar_mu = mean(xbar)
xbar_var = var(xbar)

hist(xbar, breaks="fd", prob=T)
curve(dnorm(x, df, sqrt(2*df/n)),add=T)
}


#실습8