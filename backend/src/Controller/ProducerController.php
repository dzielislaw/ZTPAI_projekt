<?php

namespace App\Controller;

use App\Entity\Producer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProducerController extends AbstractController
{
    #[Route('/producer/{id}', name: 'app_producer', methods: 'GET')]
    public function getProducer(EntityManagerInterface $entityManager, $id): Response
    {
        $producer = $entityManager->getRepository(Producer::class)->find($id);

        return $this->json(
            $producer,
            headers: ['Content-Type:' => 'application/json;charset=UTF-8']
        );
    }
}
