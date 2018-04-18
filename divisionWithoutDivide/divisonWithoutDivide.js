if(!divisor || (dividend==INT_MIN && divisor==-1))   return INT_MAX;
        
        int sign=((dividend<0)^(divisor<0)) ? -1:1;
        long long m=labs(dividend);
        long long n=labs(divisor);
        int result=0;
        
        /** dvd >= 2^k1*dvs + 2^k2*dvs ... **/
        while(m>=n){
            long long temp=n, count=1;
            while(m >= (temp<<1)){
                temp<<=1;
                count<<=1;
            }
            m-=temp;
            result+=count;
        }
        
        return sign==1?result:-result;