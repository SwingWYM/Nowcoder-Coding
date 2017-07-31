//给你两个集合，要求{A} + {B}。 注：同一个集合中不会有两个相同的元素。 
//输入描述:
//每组输入数据分为三行,第一行有两个数字n,m(0 ≤ n,m ≤ 10000)，分别表示集合A和集合B的元素个数。后两行分别表示集合A和集合B。每个元素为不超过int范围的整数,每个元素之间有个空格隔开。
//
//
//输出描述:
//针对每组数据输出一行数据，表示合并后的集合，要求从小到大输出，每个元素之间有一个空格隔开,行末无空格。
package jingdong;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Test1 {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        while(in.hasNext()){
        	int m = in.nextInt();
            int n = in.nextInt();
            ArrayList<Integer> result = new ArrayList<>();
            int cnt = m;
            for (int i = 0; i < m + n; ++i) {
                int num = in.nextInt();
                result.add(num);
            }
            Collections.sort(result);
            System.out.print(result.get(0));
            for (int i = 1; i < result.size(); ++i) {
                if (result.get(i).intValue() == result.get(i - 1).intValue())
                    continue;
                else{
                    System.out.print(" " + result.get(i));
                }
            }
            System.out.println();
        }
        
    }

}