all: \
	blake2b.o \
	utility.o \
	trustnote-miner-deposit.o \
	trustnote-difficulty-bomb.o \
	miner.o \
	libcrypto.a \
	target_shift_mining.o \
	target_shift_mining


blake2b.o:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I./../../include ./../../include/crypto/blake2b.c

utility.o:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I./../../include/ ./../../include/utility.cpp

trustnote-miner-deposit.o:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I./../../include/ ./../../include/trustnote-miner-deposit.cpp

trustnote-difficulty-bomb.o:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I./../../include/ ./../../include/trustnote-difficulty-bomb.cpp

miner.o:
	g++ -std=c++11 -fPIC -pedantic-errors -c -g -D _LIB -I. -I./../../include/ ./../../miner.cpp

target_shift_mining.o:
	g++ -std=c++11 -fPIC -pedantic-errors -c -g -D _DEBUG -I. -I./../../ -I./../../include/ ./target_shift_mining.cpp


libcrypto.a:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I./include/ -I./../../include/ \
        ./../../include/uint256.cpp \
        ./../../include/utilstrencodings.cpp \
        ./../../include/arith_uint256.cpp
	ar -crv libcrypto.a uint256.o utilstrencodings.o arith_uint256.o blake2b.o



target_shift_mining:
	g++ -fPIC \
	    -o target_shift_mining \
	    ./target_shift_mining.o \
	    ./miner.o \
	    ./utility.o \
	    ./trustnote-miner-deposit.o \
	    ./trustnote-difficulty-bomb.o \
	    ./libcrypto.a \
	    ./../../../asm/equihash/Mac/equihash_avx2.o



.PHONY: clean
clean:
	rm -rf target_shift_mining *.o *.so *.a
