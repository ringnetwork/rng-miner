all: \
    trustnote-miner-deposit.o \
    deposit_test.o \
    deposit_test


trustnote-miner-deposit.o:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I../../include/ ../../include/trustnote-miner-deposit.cpp

deposit_test.o:
	g++ -std=c++11 -fPIC -c -g -D _DEBUG -I. -I../../include/ ./deposit_test.cpp

deposit_test:
	g++ -fPIC -g \
	    -o deposit_test \
	    ./deposit_test.o ./trustnote-miner-deposit.o



.PHONY: clean
clean:
	rm -rf deposit_test deposit_table *.o *.so *.a
